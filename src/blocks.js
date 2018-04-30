export default (editor, config = {}) => {
  const bm = editor.BlockManager;

// **************************************************Column*************************************************************
  let div_col1 =  `
  <div class="row"><div class="col-md-12" style="height: 20%"></div></div>
    `;
      bm.add('1_column', {
      label: '1 Column',
      content: div_col1,
      category: 'columns',
      attributes: {
            class:'fa fa-times-rectangle'
      }
    });
    let div_col6 =  `
    <div class="row"><div class="col-md-6" style="height: 20%"></div><div class="col-md-6" style="height: 20%"></div></div>
      `;
        bm.add('6_column', {
        label: '2 Column',
        content: div_col6,
        category: 'columns',
        attributes: {
              class:'fa fa-columns'
        }
      });
      let div_col3 =  `
      <div class="row"><div class="col-md-4" style="height: 20%"></div><div class="col-md-4" style="height: 20%"></div><div class="col-md-4" style="height: 20%"></div></div>
        `;

          bm.add('3_column', {
          label: '3 Column',
          content: div_col3,
          category: 'columns',
          attributes: {
                class:'fa fa-columns'
          }
        });
    let div_col4 =  `
      <div class="row"><div class="col-md-3" style="height: 20%"></div><div class="col-md-3" style="height: 20%"></div><div class="col-md-3" style="height: 20%"></div><div class="col-md-3" style="height: 20%"></div></div>
    `;

    bm.add('4_column', {
    label: '4 Column',
    content: div_col4,
    category: 'columns',
    attributes: {
      class:'fa fa-columns'
    }
  });

  let div_col2_4_and_8 =  `
    <div class="row"><div class="col-md-4" style="height: 20%"></div><div class="col-md-8" style="height: 20%"></div></div>
  `;

  bm.add('2_column_4_and_8', {
  label: '2 Column 4,8',
  content: div_col2_4_and_8,
  category: 'columns',
  attributes: {
    class:'fa fa-columns'
  }
});

  let div_col2_8_and_4 =  `
    <div class="row"><div class="col-md-8" style="height: 20%"></div><div class="col-md-4" style="height: 20%"></div></div>
  `;

  bm.add('2_column_8_and_4', {
  label: '2 Column 8,4',
  content: div_col2_8_and_4,
  category: 'columns',
  attributes: {
    class:'fa fa-columns'
  }
  });

  let div_col12=  `
    <div class="row"><div class="col-md-1" style="height: 20%"></div><div class="col-md-1" style="height: 20%"></div><div class="col-md-1" style="height: 20%"></div><div class="col-md-1" style="height: 20%"></div><div class="col-md-1" style="height: 20%"></div><div class="col-md-1" style="height: 20%"></div><div class="col-md-1" style="height: 20%"></div><div class="col-md-1" style="height: 20%"></div><div class="col-md-1" style="height: 20%"></div><div class="col-md-1" style="height: 20%"></div><div class="col-md-1" style="height: 20%"></div><div class="col-md-1" style="height: 20%"></div></div>
  `;

  bm.add('12_columns', {
  label: '12 columns',
  content: div_col12,
  category: 'columns',
  attributes: {
    class:'fa fa-columns'
  }
  });





  // ...
}
