const EmptyList = {
  name: 'EmptyList',
  template: '<div>this is empty list</div>',
}
const TableList = {
  name: 'TableList',
  template: '<div><h3>this is table list</h3><ul><li v-for="item in items" :key="item.id">{{item.name}}</li></ul></div>',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  created: function () {
    console.log('this is table list ================');
  }
}
const OrderedList = {
  name: 'OrderedList',
  template: '<div>this is ordered list</div>',
}
const UnorderedList = {
  name: 'UnorderedList',
  template: '<div>this is unordered list</div>',
}

function appropriateListComponent(context) {
  const { items, isOrdered } = context.props;

  if (items.length === 0) {
    return EmptyList;
  }
  if (typeof items[0] === 'object') {
    return TableList;
  }

  if (isOrdered) {
    return OrderedList;
  }

  return UnorderedList;
}

const smartList = {
  functional: true,
  props: {
    items: {
      type: Array,
      required: true,
    },
    isOrdered: Boolean,
  },
  render: function (createElement, context) {

    const list = appropriateListComponent(context);

    return createElement(
      list,
      {attrs: {...context.data.attrs, ...context.props}},
      context.children
    )
  }
}

export default smartList;
