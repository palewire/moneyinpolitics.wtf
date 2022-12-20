var slugify = require('slugify');

const entrypoints = ['app'];

export default {
  domain: 'https://moneyinpolitics.wtf/',
  entrypoints: `scripts/${
    entrypoints.length > 1 ? `{${entrypoints.join(',')}}` : entrypoints[0]
  }.js`,
  pathPrefix:
    process.env.BAKER_PATH_PREFIX || process.env.DELIVERY_BASE_PATH || '/',
  createPages(createPage, data) {
    const wordList = data.dictionary.word_list;
    createPage('dictionary.json.njk', '/api/dictionary.json', {
      object_list: JSON.stringify(wordList, null, 2),
    });
    for (const d of wordList) {
      const template = 'word-detail.html';
      const url = `/${slugify(d.word, { lower: true, strict: true })}/`;
      // d.title = `${d.word} - moneyinpolitics.wtf`
      // d.description = d.definition_list[0].text;
      // d.seo_title = `${d.word} - moneyinpolitics.wtf`;
      // d.seo_description = d.definition_list[0].text;
      const context = { obj: d };
      createPage(template, url, context);
    }
  },
};
