import Link from 'next/link'
import { useMutation, useQuery } from '@apollo/client'
import Header from 'components/Header'
import Layout from 'components/Layout/Index'
import React, { useState } from 'react'
import { BackButton, ContactForm } from 'styles/pages/Create.styled'
import { DELETE_CONTACT, EDIT_CONTACT } from 'service/mutations'
import { useRouter } from 'next/router'
import { GET_CONTACT_DETAIL } from 'service/queries'
import { IPhone } from 'service/types'

const Create = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [phones, setPhones] = useState([{ number: '' }])
  const router = useRouter()
  const { id } = router.query

  const [editContact] = useMutation(EDIT_CONTACT)
  const [deleteContact] = useMutation(DELETE_CONTACT)

  const { data } = useQuery(GET_CONTACT_DETAIL, {
    variables: {
      id: id,
    },
    onCompleted(res) {
      setPhones(res.contact_by_pk.phones)
      setFirstName(res.contact_by_pk.first_name)
      setLastName(res.contact_by_pk.last_name)
    },
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    editContact({
      variables: {
        id: id,
        _set: {
          first_name: firstName,
          last_name: lastName,
        },
      },
      onCompleted() {
        router.replace('/')
      },
    })
    e.preventDefault()
  }

  const handleDelete = (e: React.MouseEvent) => {
    deleteContact({
      variables: { id: id },
      onCompleted() {
        router.replace('/')
      },
    })
    e.preventDefault()
  }

  const handleFormChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let data = [...phones]
    data[index].number = e.target.value
    setPhones(data)
  }

  if (data) {
    return (
      <Layout>
        <Header>
          <Link href='/' passHref>
            <a>
              <BackButton />
            </a>
          </Link>
          <h1>EDIT</h1>
        </Header>
        <ContactForm>
          <form onSubmit={handleSubmit}>
            <div className='input-container'>
              <input
                defaultValue={data.contact_by_pk.first_name}
                type='text'
                name='firstName'
                placeholder='First name'
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className='input-container'>
              <input
                defaultValue={data.contact_by_pk.last_name}
                type='text'
                name='lastName'
                placeholder='Last name'
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            {data.contact_by_pk.phones.map((phone: IPhone, i: number) => (
              <div key={i} className='phoneInput-container-full'>
                <input
                  disabled
                  type='text'
                  name='number'
                  placeholder='Phone number'
                  defaultValue={phone.number}
                  onChange={(e) => handleFormChange(i, e)}
                />
              </div>
            ))}
            <div className='button-group'>
              <button type='submit'>Save</button>
              <button
                type='submit'
                onClick={(e) => {
                  handleDelete(e)
                }}
              >
                Delete
              </button>
            </div>
          </form>
        </ContactForm>
      </Layout>
    )
  }
}

export default Create
