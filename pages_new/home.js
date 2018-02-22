export default {
  name: 'Home',
  view: 'home',
  sections: [
    {
      name: 'hero',
      components: [
        {
          is: 'home-hero'
        }
      ]
    },
    {
      name: 'features',
      components: [
        {
          is: 'home-features'
        }
      ]
    },
    {
      name: 'tools',
      components: [
        {
          is: 'home-tools'
        }
      ]
    },
    {
      name: 'from-the-author',
      components: [
        {
          is: 'home-author'
        }
      ]
    },
    {
      name: 'supporting-vuetify',
      components: [
        {
          is: 'general/patreon',
          root: true
        }
      ]
    },
    {
      name: 'sponsors',
      components: [
        {
          is: 'home-sponsors'
        }
      ]
    }
  ]
}
