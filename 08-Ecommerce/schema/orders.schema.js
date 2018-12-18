import CannerScript, { Block, Condition, Row, Col } from "canner-script";
import moment from "moment";
import shortId from "shortid";
import { galleryUIParams, renderBuyer, renderOrderSelect, renderPaySelect, renderShipSelect } from "./utils";
import { Inline } from './utils.schema';

const exportFields = [{
  keyName: 'no',
  title: 'NO.',
}, {
  keyName: 'createDate',
  title: 'Create Date',
  render: createDate => moment(createDate).format('YYYY/MM/DD HH:mm')
}, {
  keyName: 'buyerName',
  title: 'Buyer Name',
}, {
  keyName: 'buyerPhone',
  title: 'Buyer Phone',
}, {
  keyName: 'buyerEmail',
  title: 'Buyer Email',
}, {
  keyName: 'receiverName',
  title: 'Receiver Name',
}, {
  keyName: 'receiverPhone',
  title: 'Receiver Phone',
}, {
  keyName: 'receiveTime',
  title: 'Receive Time',
  render: time => moment(time).format('YYYY/MM/DD HH:mm')
}, {
  keyName: 'receiverAddress',
  title: 'Receiver Address'
}];

const orders = () => (
  <array
    keyName="orders"
    ui="tableRoute"
    title="Orders"
    description="Canner provide several features for developers to build a powerful CMS."
    uiParams={{
      size: 'middle',
      columns: [
        {
          title: "Order Number",
          dataIndex: "no"
        },
        {
          title: "Order Status",
          dataIndex: "orderStatus",
          filters: [
            { text: "New Order", value: "new" },
            { text: "Old Order", value: "old" }
          ],
          onFilter: (value, record) => record.orderStatus === value,
          render: renderOrderSelect
        },
        {
          title: "Create Date",
          dataIndex: "createDate"
        },
        {
          title: "Payment Status",
          dataIndex: "payStatus",
          filters: [
            { text: "Not Paid", value: "not" },
            { text: "Paid", value: "paid" }
          ],
          onFilter: (value, record) => record.payStatus === value,
          render: renderPaySelect
        },
        {
          title: "${orders.shipStatus}",
          dataIndex: "shipStatus",
          filters: [
            { text: "Unshipped", value: "not" },
            { text: "Shipping", value: "shipping" },
            { text: "Delivered", value: "delivered" }
          ],
          onFilter: (value, record) => record.shipStatus === value,
          render: renderShipSelect
        },
        {
          title: "Buyer Name",
          dataIndex: "buyerName",
          render: renderBuyer
        }
      ]
    }}
  >
    <toolbar>
      <actions>
        <export
          fields={exportFields}
          title="Orders"
        />
        <filter />
      </actions>
      <filter>
        <textFilter
          label="Search Buyer Name"
          field="buyerName"
          placeholder="Enter a buyer name"
        />
        <textFilter
          label="Search Order No"
          field="no"
          placeholder="Enter a order number"
        />
      </filter>
      <pagination />
    </toolbar>
    <Block title="Order Info" >
      <Inline>
        <string
          keyName="no"
          title="Order Number"
          disabled
          defaultValue={() => shortId.generate()}
        />
        <dateTime
          keyName="createDate"
          title="Create Date"
          defaultValue={() => moment().toISOString()}
          disabled
          required
        />
        <string keyName="buyerName" title="Buyer Name" required />
        <string keyName="buyerPhone" title="Buyer Phone" required />
      </Inline>
      <Inline>
        <string keyName="buyerEmail" title="Buyer Email" />
        <string keyName="receiverName" title="Receiver Name" required />
        <string keyName="receiverPhone" title="Receiver Phone" required />
        <dateTime keyName="receiveTime" title="Receive Time" required />
      </Inline>
      <Inline>
        <Condition match={data => data.shipmentWay !== "PERSON"}>
          <string keyName="receiverAddress" title="Receiver Address" />
        </Condition>
        <string
          keyName="shipmentWay"
          ui="select"
          title="Shipment Way"
          uiParams={{
            options: [
              { value: "PERSON", text: "In Person" },
              { value: "HOME", text: "Home" }
            ]
          }}
        />
      </Inline>
      <Block title="Card Info" type="inner">
        <string keyName="cardReceiverName" title="Receiver Name" />
        <string ui="textarea" keyName="cardContent" title="Content" />
        <string keyName="senderName" title="Sender Name" />
        <string ui="textarea" keyName="comment" title="Comment" />
      </Block>
    </Block>
    <Block title="Product List">
      <array
        keyName="detail"
        uiParams={{
          columns: [
            {
              title: "Product Number",
              dataIndex: "no"
            },
            {
              title: "Photos",
              dataIndex: "photos"
            },
            {
              title: "Name",
              dataIndex: "name"
            },
            {
              title: "Price",
              dataIndex: "price"
            },
            {
              title: "Promo",
              dataIndex: "promo"
            },
            {
              title: "Count",
              dataIndex: "count"
            }
          ],
          relationColumns: [
            {
              title: "Number",
              dataIndex: "no"
            },
            {
              title: "Photos",
              dataIndex: "photos"
            },
            {
              title: "Name",
              dataIndex: "name"
            },
            {
              title: "Price",
              dataIndex: "price"
            },
            {
              title: "Promo",
              dataIndex: "promo"
            }
          ],
          relationField: "products",
          copyFields: ["no", "name", "price", "promo", "count", "photos"]
        }}
      >
        <string keyName="no" title="Number" />
        <string keyName="name" title="Name" />
        <array
          keyName="photos"
          ui="gallery"
          title="Photos"
          uiParams={galleryUIParams}
        />
        <number keyName="price" title="Price" />
        <number keyName="promo" title="Promo" />
        <number keyName="count" title="Count" />
      </array>
    </Block>
    <Row type="flex" gutter={16}>
      <Col xs={24} sm={12} md={12}>
        <Block title="Order Status">
          <enum
            values={['new', 'old']}
            keyName="orderStatus"
            title="Order Status"
            ui="select"
            uiParams={{
              options: [
                {
                  text: "New order",
                  value: "new"
                },
                {
                  text: "Old order",
                  value: "old"
                }
              ]
            }}
          />
          <enum
            values={['ATM', 'CREDIT']}
            keyName="paymentType"
            title="Payment Type"
            ui="select"
            uiParams={{
              options: [
                {
                  text: "ATM",
                  value: "ATM"
                },
                {
                  text: "Credit Card",
                  value: "CREDIT"
                }
              ]
            }}
          />
          <enum
            keyName="payStatus"
            values={['not', 'paid']}
            title="Pay Status"
            ui="select"
            uiParams={{
              options: [
                {
                  text: "Not Paid",
                  value: "not"
                },
                {
                  text: "Paid",
                  value: "paid"
                }
              ]
            }}
          />
          <enum
            keyName="shipStatus"
            values={['not', 'shipping', 'delivered']}
            title="Ship Status"
            ui="select"
            uiParams={{
              options: [
                {
                  text: "Unshipped",
                  value: "not"
                },
                {
                  text: "Shipping",
                  value: "shipping"
                },
                {
                  text: "Delivered",
                  value: "delivered"
                }
              ]
            }}
          />
        </Block>
      </Col>
      <Col xs={24} sm={12} md={12}>
        <Block title="Order Info">
          <boolean keyName="isHighPrice" title="Is hight price" />
          <number keyName="discount" title="Discount" />
          <number keyName="shipFee" title="Shipment fee" />
          <number keyName="amount" title="$Amount" />
        </Block>
      </Col>
    </Row>
  </array>
);

export default orders