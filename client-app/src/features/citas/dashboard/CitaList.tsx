import { observer } from 'mobx-react-lite';
import { Fragment } from 'react';
import { Header, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import CitaListItem from './CitaListItem';

export default observer(function CitaList() {
  const { citaStore } = useStore();
  const { groupedCitas } = citaStore;

  return (
    <>
      {groupedCitas.map(([group, citas])=> (
      <Fragment key={group}>
        <Header sub color='teal'>
          {group}
        </Header>
        <Segment>
          <Item.Group divided>
            {citas.map(cita => (
              <CitaListItem key={cita.id} cita={cita} />
            ))}
          </Item.Group>
        </Segment>
      </Fragment>
      ))}
    </>
  )
})