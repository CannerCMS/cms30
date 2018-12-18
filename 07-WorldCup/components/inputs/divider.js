// @flow
import {Divider} from 'antd';

export default function DividerComponent({title}: {title: string}) {
  return (
    <Divider>{title || ''}</Divider>
  )
}