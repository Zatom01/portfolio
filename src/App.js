
import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'

export class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ height: '300px', position: 'relative' }}>
          <Layout fixedHeader>
            <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
              <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
              </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
              </Navigation>
            </Drawer>
            <Content />
          </Layout>
        </div>
      </Router>
    )
  }
}

export default App
