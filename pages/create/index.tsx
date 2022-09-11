import Link from 'next/link'
import { useMutation } from '@apollo/client'
import Header from 'components/Header'
import Layout from 'components/Layout/Index'
import React, { useState } from 'react'
import {
  BackButton,
  DeleteButton,
  AddButton,
  ContactForm,
} from 'styles/pages/Create.styled'
import { ADD_CONTACT } from 'service/mutations'
import router from 'next/router'

const Create = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [usedNumberErr, setUsedNumberErr] = useState<boolean>(false)
  const [lastName, setLastName] = useState<string>('')
  const [phones, setPhones] = useState([{ number: '' }])

  const [addContact] = useMutation(ADD_CONTACT)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    addContact({
      variables: {
        first_name: firstName,
        last_name: lastName,
        phones: phones,
      },
      onCompleted() {
        router.replace('/')
      },
      onError(error) {
        if (error.graphQLErrors[0].extensions.code === 'constraint-violation') {
          setUsedNumberErr(true)
        }
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

  const addNumberField = () => {
    let newfield = { number: '' }
    setPhones([...phones, newfield])
  }

  const removeNumberField = (index: number) => {
    let data = [...phones]
    data.splice(index, 1)
    setPhones(data)
  }
  return (
    <Layout>
      <Header>
        <Link href='/' passHref>
          <a>
            <BackButton />
          </a>
        </Link>
        <h1>CREATE</h1>
      </Header>
      <ContactForm>
        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <input
              type='text'
              name='firstName'
              placeholder='First name'
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='input-container'>
            <input
              type='text'
              name='lastName'
              placeholder='Last name'
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          {phones.map((phone, i, arr) => (
            <>
              <div key={i} className='phoneInput-container'>
                <input
                  type='text'
                  name='number'
                  placeholder='Phone number'
                  value={phone.number}
                  onChange={(e) => handleFormChange(i, e)}
                />
                <div className='phoneButton-group'>
                  {arr.length > 1 && (
                    <DeleteButton
                      type='button'
                      onClick={() => removeNumberField(i)}
                    />
                  )}
                  {i + 1 === arr.length && (
                    <AddButton type='button' onClick={addNumberField} />
                  )}
                </div>
              </div>
              {usedNumberErr && (
                <span className='error'>
                  Number already used, try input other numbers
                </span>
              )}
            </>
          ))}
          <button className='submit-button' type='submit'>
            Save
          </button>
        </form>
      </ContactForm>
    </Layout>
  )
}

export default Create
