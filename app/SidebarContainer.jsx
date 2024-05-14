import React from 'react'
import Link from 'next/link'
import { Menu } from './Menu.jsx'

export const SidebarContainer = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link href={"/home"} className="brand-link">
                <span className="brand-text font-weight-light">Proyecto Final</span>
            </Link>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="info">
                       &nbsp; 
                    </div>
                    <div className="info">
                       &nbsp; 
                    </div>
                    <div className="info">
                        <Link href={"/home"} className="d-block">Menu Principal</Link>
                    </div>
                </div>
                <Menu></Menu>
            </div>
        </aside>
  )
}
