import CannerScript, { Default, Tabs } from "canner-script";
import TextFilter from "../components/columns/textFilter";
import { galleryValidation } from "./utils";

const noFilter = new TextFilter('no');
const nameFilter = new TextFilter('name');
const Products = () => (
  <array
    keyName="products"
    title="Products"
    description="You can implement sort and filter in each column with antd column configuration and customize your page header."
    ui="tableRoute"
    disabled={{
      delete: true
    }}
    uiParams={{
      size: 'small',
      columns: [
        {
          title: "Photos",
          dataIndex: "photos",
          fixed: 'left'
        },
        {
          title: "No",
          dataIndex: "no",
          filterDropdown: noFilter.renderFilter,
          onFilter: noFilter.onFilter,
          render: noFilter.render
        },
        {
          title: "Name",
          dataIndex: "name",
          filterDropdown: nameFilter.renderFilter,
          onFilter: nameFilter.onFilter,
          render: nameFilter.render
        },
        {
          title: "Price",
          dataIndex: "price",
          sorter: (a, b) => a.price - b.price,
        },
        {
          title: "Promo",
          dataIndex: "promo",
          sorter: (a, b) => a.promo - b.promo,
        }
      ]
    }}
    graphql={`
      query($productsWhere: ProductWhereInput) {
        products: productsConnection(where: $productsWhere) {
          edges {
            cursor
            node {
              product
              id
              name
              no
              photos {
                image {
                  url
                }
              }
              price
              promo
            }
          }
          pageInfo {
            hasNextInfo
          }
        }
      }
    `}
  >
    <toolbar>
      <pagination />
    </toolbar>
    <Tabs>
      <Default keyName="basicSetting" title="Basic Setting" type="inner" injectValue={{layout: 'horizontal'}} >
        <string keyName="no" title="No" description="Unique Number of the Product" required/>
        <string keyName="name" title="Name" required />
        <object keyName="description" ui="editor" title="Description" uiParams={{minHeight: '200px'}} />
        <number keyName="price" title="Price" required />
        <number keyName="promo" title="Promo" />
        <relation
          keyName="category"
          ui="singleSelectTree"
          relation={{
            type: "toOne",
            to: "categories"
          }}
          title="Category"
          uiParams={{
            textCol: "name",
            columns: [
              {
                title: "Name",
                dataIndex: "name"
              }
            ],
            relationField: "category"
          }}
        />
      </Default>
      <Default keyName="storage" title="Storage">
        <object keyName="storage">
          <number keyName="count" title="Count" layout="horizontal" />
          <boolean keyName="enabled" title="Enabled" layout="horizontal" />
        </object>
      </Default>
      <Default keyName="photos" title="Photos">
        <array
          keyName="photos"
          ui="gallery"
          required
          validation={galleryValidation}
        />
      </Default>
    </Tabs>
  </array>
);

export default Products