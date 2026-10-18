/**
 * Local Pug Data
 */

var locals = {}

locals.baseTitle = 'Bennett Reeves'
locals.getTitle = function (subtitle) {
  if (subtitle) {
    return locals.baseTitle + ' - ' + subtitle
  }
  return locals.baseTitle
}

locals.works = {
  '2025': {
    title: '2025-',
    link: '/works/2025.html',
    imageRootSrc: '2025',
    images: [
      { src: 'claire.jpg', title: 'Claire', description: '2026. Oil on canvas, 24 x 30 inches.' },
      { src: 'lake_as_adam.png', title: 'Lake (as Adam)', description: '2026. Oil on canvas and wood panel, 8 x 34.5 inches.' },
      { src: 'lake_as_adam_detail.jpg', title: 'Lake (as Adam)', description: 'Detail of Lake (as Adam)' },
      { src: 'pride.jpg', title: 'Pride', description: '2026. Watercolor on paper, 11 x 14 (?) inches.' },
      { src: '870_judson.jpg', title: '870 Judson st.', description: '2025-26. Oil on canvas, 14 x 11 inches.' },
    ],
  },

  '2019_2023': {
    title: '2019-2023',
    link: '/works/2019_2023.html',
    imageRootSrc: '2019_2023',
    images: [
      { src: 'self_portrait_2023.png', title: 'Self portrait', description: '2023. Watercolor, gauche, and graphite on paper, 40 x 50 (?) inches.' },
      { src: 'ben_and_lake_detail.jpg', title: 'Lake and Ben', description: 'Detail of Lake and Ben, 2019. Watercolor, gauche, and graphite on paper, 110 x 78 (?) inches.' },
    ],
  },

  '2017_2018': {
    title: '2017-2018',
    link: '/works/2017_2018.html',
    imageRootSrc: 'archive',
    images: [
      { src: 'waiting_room/waiting_room.jpg', title: 'Self portrait (in a waiting room)', description: '2018. Image transfer and graphite on paper, 16 x 20 inches.' },
      { src: 'other_works/other_works_stripes.jpg', title: 'Untitled stripes', description: '2018. Watercolor and gouache on paper, 22 x 30 inches.' },
      { src: 'this_hole/this_hole.jpg', title: 'This hole has a name', description: '2018. Graphite, watercolor, tracing paper, and tape on paper, 38 x 30 inches.' },
      { src: 'other_works/other_works_virginia_woolf.jpg', title: 'Self portrait (with Virginia Woolf)', description: '2018. Graphite and watercolor on paper, 16 x 20 inches.' },
      { src: 'ezra/ezra.jpg', title: 'Ezra (and trash yard)', description: '2017. Watercolor and graphite on paper, 41 x 30  inches.' },
      { src: 'ezra/ezra_detail.jpg', beforeTitle: 'Detail of', title: 'Ezra (and trash yard)' },
      { src: 'other_works/other_works_tonet.jpg', title: 'Tonet', description: '2017. Watercolor, gouache, and graphite on paper, 25 x 40 inches.' },
      { src: 'other_works/other_works_moonrise.jpg', title: 'Moonrise', description: '2017. Graphite transfer on paper, 16 x 20 inches.' },
    ],
  },

  'archive': {
    title: 'Archive',
    link: '/works/archive.html',
    imageRootSrc: 'archive',
    images: [
      { src: 'pair/pair.jpg' },
      { src: 'pair/clouds_looked_like.jpg', title: 'what clouds looked like', description: '2016. Watercolor and graphite on paper, 51 x 78 inches.' },
      { src: 'pair/time_spent.jpg', title: 'time spent walking home', description: '2016. Watercolor and graphite on paper, 51 x 88 inches.' },
      { src: 'pair/clouds_looked_like_detail_one.jpg', beforeTitle: 'Detail of', title: 'what clouds looked like' },
      { src: 'cindy/cindy_no5.jpg', title: 'Cindy (no. 5)', description: '2015. Watercolor and graphite on paper, 25 x 40 inches.' },
      { src: 'cindy/cindy_no3.jpg', title: 'Cindy (no. 3)', description: '2015. Watercolor and graphite on paper, 25 x 40 inches.' },
      { src: 'cindy/cindy_no4.jpg', title: 'Cindy (no. 4)', description: '2015. Watercolor and graphite on paper, 25 x 40 inches.' },
      { src: 'cindy/cindy_no2.jpg', title: 'Cindy (no. 2)', description: '2015. Watercolor and graphite on paper, 25 x 40 inches.' },
      { src: 'cindy/cindy_no1.jpg', title: 'Cindy (no. 1)', description: '2015. Watercolor and graphite on paper, 25 x 40 inches.' },
      { src: 'cindy/cindy.jpg', title: 'Cindy', description: '2015. Watercolor and graphite on paper.' },
      { src: 'transfers/transfers_plates_1.jpg', title: 'Transfers (plates)', description: '2015. Graphite on tracing paper.' },
      { src: 'transfers/transfers_plates_2.jpg', title: 'Transfers (plates)', description: '2015. Graphite on tracing paper.' },
      { src: 'transfers/transfers.jpg', title: 'Transfers', description: '2015. Graphite transfers.' },
      { src: 'transfers/transfers_stairs_that_lead_to_nowhere.jpg', title: 'Stairs that lead to nowhere (cropped version)', description: '2015. Graphite transfers on paper, 40 x 60 inches.' },
      { src: 'transfers/transfers_empty_picture_frames.jpg', title: 'Empty frames that hang in the yard', description: '2015. Graphite transfers on paper, 40 x 60 inches.' },
      { src: 'one_week/one_week_no7.jpg', title: 'One week (no. 7)', description: '2014. Watercolor and graphite on paper, 22 x 30 inches.' },
      { src: 'one_week/one_week_no1.jpg', title: 'One week (no. 1)', description: '2014. Watercolor and graphite on paper, 22 x 30 inches.' },
      { src: 'one_week/one_week.jpg', title: 'One week', description: '2014. Watercolor and graphite.' },
      { src: 'erased_drawings/erased_drawings_no4.jpg', title: 'Erased drawings (no. 4)', description: '2014. Graphite, tape, and walnut oil on paper, 18 x 24 inches.' },
      { src: 'erased_drawings/erased_drawings_no7.jpg', title: 'Erased drawings (no. 7)', description: '2014. Graphite and tape on paper, 18 x 24 inches.' },
      { src: 'erased_drawings/erased_drawings_no6.jpg', title: 'Erased drawings (no. 6)', description: '2014. Graphite and tape on paper, 18 x 24 inches.' },
      { src: 'erased_drawings/erased_drawings_no2.jpg', title: 'Erased drawings (no. 2)', description: '2014. Graphite, tape, and walnut oil on paper, 18 x 24 inches.' },
      { src: 'other_works/second_to_last.jpg', title: 'second to last', description: ' 2017. Watercolor and graphite on paper, 16 x 20 inches.' },
      { src: 'other_works/other_works_floating_noah.jpg', title: 'Floating Noah', description: '2017. Oil and graphite on canvas, 20 x 16 inches.' },
      { src: 'other_works/other_works_noah.jpg', title: 'Noah', description: '2016. Watercolor and graphite on paper, 13 x 16 inches.' }
    ]
  }

}

module.exports = locals
