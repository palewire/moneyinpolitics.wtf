const entrypoints = ['app'];

const slugifyFunc = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

export default {
  domain: 'https://moneyinpolitics.wtf/',
  entrypoints: `scripts/${
    entrypoints.length > 1 ? `{${entrypoints.join(',')}}` : entrypoints[0]
  }.js`,
  pathPrefix:
    process.env.BAKER_PATH_PREFIX || process.env.DELIVERY_BASE_PATH || '/',
  nunjucksFilters: {
    slugify(value) {
      return slugifyFunc(value);
    },
  },
  createPages(createPage, data) {
    const wordList = data.dictionary.word_list;
    createPage('dictionary.json.njk', '/api/dictionary.json', {
      object_list: JSON.stringify(wordList, null, 2),
    });
    for (const d of wordList) {
      const template = 'word-detail.html';
      const url = `/${slugifyFunc(d.word)}/`;
      // d.title = `${d.word} - moneyinpolitics.wtf`
      // d.description = d.definition_list[0].text;
      // d.seo_title = `${d.word} - moneyinpolitics.wtf`;
      // d.seo_description = d.definition_list[0].text;
      const context = { obj: d, meta: data.meta };
      createPage(template, url, context);
    }
  },
};
