import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import SidebarItem from './SidebarItem'
import SidebarWrapper from './SidebarWrapper'

function Sidebar({data}) {
    return (
        <Fragment>
            <SidebarWrapper>

           
    {data && data.length > 0 ? (
          data.map((item) =>
            // item.type !== "StudentEnrollment" ? 
            (
              <SidebarItem key  ={item.id} data ={item.assignment.name} ></SidebarItem>
            ) 
            // : null
          )
        ) : (
          <h2>No Todo Found</h2>
        )}
         </SidebarWrapper>
 
        </Fragment>
    )
}

Sidebar.propTypes = {
data: PropTypes.object.isRequired,
}

export default Sidebar
