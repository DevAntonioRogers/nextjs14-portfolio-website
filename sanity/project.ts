export default {
  name: 'project',
  title: "Project",
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ]
}