import './App.css'
import { BryntumSchedulerPro } from '@bryntum/schedulerpro-react'

import '@bryntum/schedulerpro/schedulerpro.classic-dark.css'

function App() {
  return (
    <BryntumSchedulerPro
      startDate="2023-05-01"
      endDate="2023-05-31"
      height={300}
      viewPreset="weekAndDay"
      columns={[
        { type: "resourceInfo", text: "Name", field: "name", width: 150 },
      ]}
      events={[
        {
          id: 1,
          name: "Event 1",
          startDate: "2023-05-01",
          endDate: "2023-05-03",
        },
        {
          id: 2,
          name: "Event 2",
          startDate: "2023-05-02",
          endDate: "2023-05-05",
        }
      ]}
      resources={[
        { id: 1, name: "Resource 1" },
      ]}
      assignments={[
        { id: 1, resourceId: 1, eventId: 1 },
      ]}
    />
  );
}

export default App
