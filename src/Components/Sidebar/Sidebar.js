import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import SidebarItem from './SidebarItem'
import { COURSES_ERROR } from '../../Redux/Action/types'
import SidebarWrapper from './SidebarWrapper'

function Sidebar({data}) {
    return (
        <Fragment>
            <SidebarWrapper>

           
    {data && data.length > 0 ? (
          data.map((item) =>
            item.type !== "StudentEnrollment" ? (
              <SidebarItem key  ={item.id} data ={item.assignment.name}></SidebarItem>
            ) : null
          )
        ) : (
          <h2>No Todo Found</h2>
        )}
         </SidebarWrapper>
 
        </Fragment>
    )
}

Sidebar.propTypes = {

}

export default Sidebar

// @click.away="open = false" 
// @click.away="open = false" 
// @click="open = !open"
// :class="{'block': open, 'hidden': !open}" :20
// @click="open = !open"26
// :class="{'rotate-180': open, 'rotate-0': !open}"28