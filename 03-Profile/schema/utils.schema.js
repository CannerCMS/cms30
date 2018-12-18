import CannerScript, {Default, Layout} from 'canner-script';
import TitleComponent from '../components/layouts/Title';
import PSComponent from '../components/layouts/PS';

export const BorderTop = ({attributes, children}) => (
  <Default style={{...((attributes || {}).style || {}), borderTop: '1px solid #ccc', paddingTop: 16}}>
    {children}    
  </Default>
)

export const Title = ({attributes, children}) => (
  <Layout component={TitleComponent} {...attributes}>
    {children}
  </Layout>
)

export const PS = ({attributes, children}) => (
  <Layout component={PSComponent} {...attributes}>
    {children}
  </Layout>
)
