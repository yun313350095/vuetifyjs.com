export default {
  header: 'Elevation',
  headerText: 'The elevation helpers allow you to control relative depth, or distance, between two surfaces along the **z-axis**. There is a total of 25 elevation levels. You can set an element\'s elevation by using the class `elevation-{n}`, where `n` is a integer between 0-24 corresponding to the desired elevation.',
  components: ['Elevation'],
  examples: [{
    default: {
      header: 'Default Example',
      desc: 'The default use of the elevation helper.'
    },
    textElevation: {
      header: 'Text Elevation Example',
      desc: 'The elevation helper using a v-card and text.'
    },
    imageElevation: {
      header: 'Image Elevation Example',
      desc: 'The elevation helper using a v-card and image.'
    }
  }]
}
