import fs from "fs";

import yaml from "yaml";

import Head from "next/head";

function ChangeType({ type }) {
  const map = {
    new: ["neu", "bg-green-500 text-white dark:text-black"],
    improved: ["verbessert", "bg-purple-500 text-white dark:text-black"],
    fixed: ["repariert", "bg-orange-500 text-white dark:text-black"],
  };
  let label, cls;
  try {
    [label, cls] = map[type];
  } catch (e) {
    if (typeof type === "undefined") {
      throw Error(`Missing type`);
    } else {
      throw Error(`Unknown type: ${type}`);
    }
  }
  return (
    <span
      className={`inline-block uppercase text-xs tracking-widest font-semibold text-white px-3 rounded-full ${cls}`}
    >
      {label}
    </span>
  );
}

export default function IndexPage({ releases }) {
  return (
    <div className="max-w-6xl mx-auto p-8 lg:px-16 lg:py-12">
      <Head>
        <title>WEG+ Changelog</title>
        <meta
          name="description"
          content="Alle Neuerungen rund um WEG+, die digitale Plattform für Wohnungseigentümer und -verwalter"
        />
      </Head>

      <h1 className="flex items-center justify-start space-x-2 lg:space-x-4 text-2xl lg:text-4xl text-gray-500">
        <a
          href="https://www.weg.plus/"
          title="WEG+"
          className="flex items-baseline space-x-2"
        >
          <svg
            className="inline-block w-6 lg:w-8"
            viewBox="0 0 70 54"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
          >
            <path
              d="M55.1.05a2 2 0 011.37.54l12.9 12.01c.4.38.63.91.63 1.47V52a2 2 0 01-2 2H2a2 2 0 01-2-2V14.05a2 2 0 01.68-1.5l-.03-.03 13.12-12A2 2 0 0115.12 0H55.1v.05zM44.2 14.94V50H66V14.94L55.1 4.78 44.2 14.94zM4 16.04V50h36.15V16.05H4zM15.9 4l-8.8 8.05h34.34L50.08 4H15.89z"
              className="fill-current text-primary-600 group-hover:text-primary-400 dark:group-hover:text-primary-700"
            />
            <path
              d="M53.08 23.73a2 2 0 01-4.02 0 2 2 0 014.02 0m8.34 0a2 2 0 01-4.02 0 2 2 0 014.02 0m-6.33 13.65c2.57 0 4.68-2.1 4.69-4.64h-9.4a4.69 4.69 0 004.68 4.64"
              className="fill-current text-secondary-800 dark:text-gray-400 group-hover:text-secondary-600"
              fillRule="nonzero"
            />
          </svg>
          <div className="font-semibold leading-none tracking-tight text-secondary-800 dark:text-white dark:hover:text-gray-200">
            WEG<span className="text-primary-600">+</span>
          </div>
        </a>
        <span>Changelog</span>
      </h1>

      <div className="lg:grid lg:grid-cols-5 lg:gap-16 mt-16">
        <div className="lg:col-span-4">
          {releases.map((release, idx) => (
            <div
              className="mb-16 first:pt-0"
              key={`release-${idx}`}
              id={`release-${idx}`}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                {release.name}
              </h2>
              <div className="grid lg:grid-cols-2 gap-6">
                {release.changes.map((change, idx2) => (
                  <div
                    key={`change-${idx}-${idx2}`}
                    className="bg-white border rounded shadow-sm px-4 lg:px-6 py-3 sm:py-4"
                  >
                    <ChangeType type={change.type} />
                    <h3 className="font-semibold text-lg lg:text-xl text-gray-800 mb-1 hyphens-auto">
                      {change.title}
                    </h3>
                    <p className="text-gray-600 text-sm hyphens-auto">
                      {change.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <ul className="space-y-4 mt-4 sticky top-0 pt-9">
            {releases.map((release, idx) => (
              <li className="whitespace-no-wrap" key={`toc-${idx}`}>
                <a
                  href={`#release-${idx}`}
                  className="text-primary-600 hover:text-primary-500"
                >
                  {release.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const file = fs.readFileSync("./data/changelog.yml");
  const data = yaml.parse(file.toString());
  return {
    props: data,
  };
}
