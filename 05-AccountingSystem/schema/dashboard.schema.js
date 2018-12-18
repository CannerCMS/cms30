import CannerScript, {Row, Col, Block} from 'canner-script';

const expenseQL = `query {
  expenses {
    id
    amount
    category {
      id
      name
    }
  }
}`;

const incomeQL = `query {
  incomes {
    id
    amount
    category {
      id
      name
    }
  }
}`;

const uiParams={
  formatter: v => `$ ${v}`
}

export default () => (
  <page keyName="dashboard" title="Dashboard">
    <Row type="flex" gutter={36}>
      <Col span={8}>
        <Block>
          <component keyName="expense" title="Expense" packageName="@canner/antd-indicator-amount"
            graphql={expenseQL}
            transformData={(data) => {
              return data.reduce((pre, cur) => pre + cur.amount, 0)
            }}
            uiParams={uiParams}
          />
        </Block>
      </Col>
      <Col span={8}>
        <Block>
          <component keyName="income" title="Income" packageName="@canner/antd-indicator-amount"
            graphql={incomeQL}
            transformData={(data) => data.reduce((pre, cur) => pre + cur.amount, 0)}
            uiParams={uiParams}
          />
        </Block>
      </Col>
      <Col span={8}>
        <Block>
          <component keyName="balance" title="Balance"
            packageName="../components/inputs/balance.js"
            uiParams={uiParams}
          />
        </Block>
      </Col>
    </Row>
    <Block title="Expense and Income">
      <component
        packageName="../components/dashboard/bar.js"
        keyName="bar"
      />
    </Block>
    <Row type="flex" gutter={36}>
      <Col lg={12} md={24}>
        <Block title="Expense By Category">
          <component
            packageName="../components/dashboard/pie"
            keyName="expensePie"
            graphql={expenseQL}
            dataKey="expenses"
          />
        </Block>
      </Col>
      <Col lg={12} md={24}>
        <Block title="Income By Category">
          <component
            packageName="../components/dashboard/pie"
            keyName="incomePie"
            dataKey="incomes"
            graphql={incomeQL}
          />
        </Block>
      </Col>
    </Row>
  </page>
)