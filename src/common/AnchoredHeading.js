var getChildrenTextContent = function (children) {
  return children.map(function (node) {
    return node.children
      ? getChildrenTextContent(node.children)
      : node.text
  }).join('')
}

const AnchoredHeading = {
  render: function (createElement) {
    // 创建 kebab-case 风格的 ID
    var headingId = getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, '-')
      .replace(/(^-|-$)/g, '')

    return createElement(
      'h' + this.level,
      {
        on: {
          click: this.handleClick
        }
      },
      [
        createElement('a', {
          attrs: {
            name: headingId,
            href: '#' + headingId
          }
        }, this.$slots.default)
      ]
    )
  },
  methods: {
    handleClick: function () {
      console.log('=============');
    }
  },
  created: function () {
    console.log('================================', this.level);
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
};

export default AnchoredHeading;
