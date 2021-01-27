import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
// import ServerTable from 'react-strap-table '
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import axios from 'axios';
import { Badge, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'font-awesome/css/font-awesome.min.css';

import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      repos: [],
      user: '',
      searchingUser: '',
      nextId: 0,
      showmodal: false,
      localhost: 'http://localhost:3001',
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    this.users();
  }

  users() {
    axios
      .get(this.state.localhost + '/users', {
        params: { id: this.state.nextId },
      })
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        this.setState({ users: [] });
      });
  }

  user(username) {
    axios
      .get(this.state.localhost + '/users/' + username)
      .then((response) => {
        this.setState({ user: response.data });
      })
      .catch((error) => {
        this.setState({ user: '' });
      });
  }

  repos(username) {
    axios
      .get(this.state.localhost + '/users/' + username + '/repos')
      .then((response) => {
        console.log(response.data);
        this.setState({ repos: response.data });
      })
      .catch((error) => {
        this.setState({ user: [] });
      });
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  modalUserDetails() {
    return (
      <Form>
        <Modal
          isOpen={this.state.showModal}
          className={'modal-primary modal-lg'}
        >
          <ModalHeader>User details</ModalHeader>
          <ModalBody>
            <div className='form'>
              <div className='row'>
                {this.state.user === '' ? (
                  <div>
                    <input
                      className='ml-2'
                      placeholder='Search by username'
                      defaultValue=''
                      onChange={(e) =>
                        this.setState({ searchingUser: e.target.value })
                      }
                    ></input>
                    <button
                      onClick={() =>
                        this.user(this.state.searchingUser) &
                        this.repos(this.state.searchingUser)
                      }
                      className='fa fa-search btn btn-primary mb-1'
                    ></button>
                  </div>
                ) : (
                  <input
                    disabled
                    defaultValue={this.state.user.id}
                    className='ml-2'
                  ></input>
                )}
              </div>
              <div className='row'>
                {this.state.user === '' ? (
                  ''
                ) : (
                  <input
                    className='ml-2'
                    disabled
                    defaultValue={this.state.user.login}
                  ></input>
                )}
              </div>
              <div className='row'>
                {this.state.user === '' ? (
                  ''
                ) : (
                  <input
                    className='ml-2 w-75'
                    disabled
                    defaultValue={this.state.user.url}
                  ></input>
                )}
              </div>
              <div className='row'>
                {this.state.user === '' ? (
                  ''
                ) : (
                  <input
                    className='ml-2'
                    disabled
                    defaultValue={this.state.user.created_at}
                  ></input>
                )}
              </div>
              {this.state.repos === [] ? (
                ''
              ) : (
                <BootstrapTable
                  keyField='id'
                  data={this.state.repos}
                  columns={[
                    {
                      dataField: 'id',
                      text: 'Repos. ID',
                      sort: true,
                    },
                    {
                      dataField: 'name',
                      text: 'Name',
                      sort: true,
                    },
                    {
                      dataField: 'url',
                      text: 'URL',
                      sort: true,
                    },
                  ]}
                />
              )}
            </div>
          </ModalBody>
          <ModalFooter>
            <div>
              <button
                type='button'
                class='btn btn-primary'
                onClick={() =>
                  this.setState({ user: '' }) &
                  this.toggleModal() &
                  this.setState({ repos: [] })
                }
              >
                Close
              </button>
            </div>
          </ModalFooter>
        </Modal>
      </Form>
    );
  }

  columns() {
    return [
      {
        dataField: 'id',
        text: 'Github ID',
        sort: true,
      },
      {
        dataField: 'login',
        text: 'Login',
        sort: true,
      },
      {
        text: 'Details',
        formatter: (cell, row, rowIndex, extraData) => (
          <div>
            <button
              className='btn btn-warning mr-2'
              onClick={() => this.user(row.login) & this.toggleModal()}
            >
              <i className='fa fa-pencil'></i>
            </button>
          </div>
        ),
      },
    ];
  }

  render() {
    const { SearchBar } = Search;
    return (
      <div className='container'>
        <div className='card'>
          <div className='card-header'>
            <Badge variant='primary'>SHAW AND PARTNERS TEST FULL STACK</Badge>
            <body>
              <div className='card-body'>
                <ToolkitProvider
                  keyField='id'
                  data={this.state.users}
                  columns={this.columns()}
                  search
                >
                  {(tooltipProps) => (
                    <div>
                      <SearchBar
                        {...tooltipProps.searchProps}
                        className='custome-search-field'
                        placeholder='Search in table'
                      />
                      <button
                        className='float-right btn btn-primary fa fa-search fa fa-user ml-2 mb-1'
                        onClick={this.toggleModal}
                      ></button>
                      <BootstrapTable
                        {...tooltipProps.baseProps}
                        pagination={paginationFactory()}
                        keyField='id'
                        striped
                        hover
                        condensed
                        bordered={true}
                      />
                      <button
                        onClick={async () =>
                          (await this.setState({
                            nextId: this.state.nextId + 134,
                          })) &
                          (await this.users()) &
                          console.log(this.state.nextId)
                        }
                        type='button'
                        class='btn btn-primary float-right'
                      >
                        Next 10 Pages
                      </button>
                      {this.state.nextId === 0 ? (
                        ''
                      ) : (
                        <button
                          type='button'
                          class='btn btn-primary float-left'
                          onClick={async () =>
                            (await this.setState({
                              nextId: this.state.nextId - 134,
                            })) &
                            (await this.users()) &
                            console.log(this.state.nextId)
                          }
                        >
                          Previous 10 Pages
                        </button>
                      )}
                    </div>
                  )}
                </ToolkitProvider>
              </div>
            </body>
          </div>
        </div>
        {this.modalUserDetails()}
      </div>
    );
  }
}

export default App;
