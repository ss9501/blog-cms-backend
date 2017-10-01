const hljs = require('highlight.js')

const md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});

module.exports=function convert(oriDoc,cut){
  //cut boolean
    let newDoc = oriDoc
      for(let i=0;i<oriDoc.length;i++){
        if(cut){
          newDoc[i].content = md.render(oriDoc[i].content).slice(0,380)
        }else{
          newDoc[i].content = md.render(oriDoc[i].content)
        }
        
      }
     return newDoc
  }