// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      title: 'Release',
      name: 'release',
      type: 'document',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Date',
          name: 'date',
          type: 'date',
        },
        {
          title: 'Changes',
          name: 'changes',
          type: 'array',
          of: [
            {
              type: 'object',
              title: 'Change',
              name: 'change',
              fields: [
                {
                  title: 'Title',
                  name: 'title',
                  type: 'string',
                },
                {
                  title: 'Type',
                  name: 'changeType',
                  type: 'string',
                  options: {
                    list: ['new', 'improved', 'fixed'],
                    layout: 'radio'
                  },
                },
                {
                  title: 'Description',
                  name: 'description',
                  type: 'text',
                },
                {
                  title: 'Image',
                  name: 'image',
                  type: 'image',
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'changeType',
                },
              }
            }
          ],
          options: {
            sortable: true,
          },
        }
      ]
    }
  ])
})
