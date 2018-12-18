import CannerScript from "canner-script";

const categories = () => (
  <array
    keyName="categories"
    ui="tree"
    title="Categories"
    description="Dealing with relationship data is annoying, but in Canner, it\'s just a few tags and properties."
    uiParams={{
      relationField: "category",
      columns: [
        {
          title: "Category Name",
          dataIndex: "name"
        }
      ]
    }}
  >
    <string keyName="name" title="Category Name" required />
    <relation
      keyName="category"
      ui="singleSelectTree"
      relation={{
        type: "toOne",
        to: "categories"
      }}
      title="Parent Category"
      uiParams={{
        disabled: (data, treeKey) => {
          return treeKey.indexOf("-") !== -1;
        },
        textCol: data => data.name,
        relationField: "category"
      }}
    >
      <toolbar>
      </toolbar>
    </relation>
  </array>
);

export default categories;