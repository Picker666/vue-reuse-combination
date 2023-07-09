var getChildrenTextContent = function (children) {
  return children.map(function (node) {
    return node.children
      ? getChildrenTextContent(node.children)
      : node.text
  }).join('')
}

const handleClick = () => {
  console.log('functional default click ===============');
}

const functionalComponent = {
  functional: true,
  render: function (createElement, context) {
    // 创建 kebab-case 风格的 ID
    var headingId = getChildrenTextContent(context.children)
      .toLowerCase()
      .replace(/\W+/g, '-')
      .replace(/(^-|-$)/g, '')

    return createElement(
      'h' + context.props.level,
      context.data,
      [
        createElement('a', {
          attrs: {
            name: headingId,
            href: '#' + headingId
          },
          on: {
            click: context.listeners.click || handleClick
          }
        }, context.children)
      ]
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
};

export default functionalComponent;
