import CannerScript, {Block} from 'canner-script';

export const HoveredBlock = ({attributes, children}) => (
  <Block {...(attributes || {})} style={{
      boxShadow: '0 0 5px 0 rgba(43,43,43,0.1), 0 11px 6px -7px rgba(43,43,43,0.1)',
      marginBottom: 36,
      ...((attributes || {}).style || {})
  }}>
    {children}
  </Block>
)