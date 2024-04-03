import React from 'react';
import { Grid } from 'gridjs-react';

function Cycles(){
    return(
        <div>
            <h1>Cycles</h1>
            <Grid
  data={[
    ['John', 'john@example.com'],
    ['Mike', 'mike@gmail.com']
  ]}
  columns={['Name', 'Email']}
  search={true}
  pagination={{
    limit: 1,
  }}
/>
        </div>
    )
}

export default Cycles;