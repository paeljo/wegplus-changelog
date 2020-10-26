import Head from 'next/head'
import Logo from '../components/logo'
import sanityClient from '../sanityClient'

function ChangeType({ type }) {
  const map = {
    new: ['neu', 'bg-green-200 text-green-900'],
    improved: ['verbessert', 'bg-purple-200 text-purple-800'],
    fixed: ['repariert', 'bg-orange-200 text-orange-800'],
  };
  const [label, cls] = map[type];
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
    <div className="max-w-5xl mx-auto p-8 lg:px-16 lg:py-12">
      <Head>
        <title>WEG+ Changelog</title>
        <meta name="description" content="Alle Neuerungen rund um WEG+, die digitale Plattform für Wohnungseigentümer und -verwalter" />
      </Head>

      <h1 className="flex items-center justify-start text-xl md:text-3xl lg:text-4xl text-gray-600">
        <a href="https://www.weg.plus/" title="WEG+">
          <Logo className="flex-shrink-0 mr-2 md:mr-4" />
        </a>
        Changelog
      </h1>

      <div className="lg:flex lg:flex-row-reverse mt-16">

        <div className="lg:w-96 lg:ml-16 lg:text-lg hidden lg:block">
          <ul className="space-y-4 mt-4">
            {releases.map(release => (
              <li className="whitespace-no-wrap" key={`toc-${release._id}`}>
                <a href={`#release-${release._id}`} className="text-blue-500 hover:text-blue-300">{release.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {releases.map(release => (
            <div className="mb-16 first:pt-0" key={`release-${release._id}`} id={`release-${release._id}`}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-teal-600 mb-4">{release.title}</h2>
              <div className="space-y-6">
                {release.changes.map(change => (
                  <div key={change._id}>
                    <ChangeType type={change.changeType} />
                    <h3 className="font-semibold text-gray-800 mt-1">{change.title}</h3>
                    <p className="text-gray-600 text-sm lg:text-base">{change.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const releases = await sanityClient.fetch('*[_type=="release"] | order(date desc)');
  return {
    props: {
      releases,
    }
  }
}
