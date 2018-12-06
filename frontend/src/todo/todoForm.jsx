import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props =>(
    <div role='form' className='todoFrom'>
        <Grid cols='10 10 11 11'>
            <input type="text" 
            className='form-control' 
            placeholder='Adicione uma tarefa' 
            value={props.description}
            onChange={props.handleChange}/>
        </Grid>
        <Grid cols='1 1 1 1'>
            <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
        </Grid>
    </div>
)