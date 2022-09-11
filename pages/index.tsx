import { ChangeEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import type { NextPage } from 'next'
import { useMutation, useQuery } from '@apollo/client'
import {
  FiTrash as ButtonDelete,
  FiEdit as ButtonEdit,
  FiPlusSquare,
} from 'react-icons/fi'

import useDebounce from 'helpers/useDebounce'
import toTitleCase from 'helpers/toTitleCase'

import Header from 'components/Header'
import Layout from 'components/Layout/Index'

import {
  ContactListSection,
  InfoSection,
  ButtonGroup,
  Form,
  Input,
  AddContactButton,
} from 'styles/pages/Home.styled'

import { GET_CONTACT_LIST } from 'service/queries'
import { DELETE_CONTACT } from 'service/mutations'
import { IContact } from 'service/types'

const Home: NextPage = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(searchInputValue, 500)

  const { data, error, loading, refetch } = useQuery(GET_CONTACT_LIST)
  const [deleteContact] = useMutation(DELETE_CONTACT)

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchInputValue(e.target.value)
  }

  const handleDelete = (e: React.MouseEvent, id: number) => {
    deleteContact({
      variables: { id: id },
      onCompleted() {
        refetch()
      },
    })
    e.preventDefault()
  }

  useEffect(() => {
    refetch({
      where: {
        first_name: {
          _like: `%${toTitleCase(searchInputValue.split(' ')[0])}%`,
        },
        last_name: {
          _like: `%${toTitleCase(
            searchInputValue.split(' ')[1] ? searchInputValue.split(' ')[1] : ''
          )}%`,
        },
      },
    })
  }, [debouncedValue])

  return (
    <Layout>
      <Header>
        <Form>
          <Input type='text' placeholder='Search' onChange={handleSearch} />
        </Form>
        <Link href='/create'>
          <AddContactButton>
            <FiPlusSquare />
          </AddContactButton>
        </Link>
      </Header>
      <ContactListSection>
        <ul>
          {loading ? (
            <div className='loader-container'>
              <span className='loader' />
            </div>
          ) : (
            <>
              {data?.contact?.map((contact: IContact) => (
                <li key={contact.id}>
                  <InfoSection>
                    <h3>{`${contact.first_name} ${contact.last_name}`}</h3>
                    <p>{contact.phones?.[0]?.number}</p>
                  </InfoSection>
                  <ButtonGroup>
                    <Link href={`/create/${contact.id}`} passHref>
                      <a href=''>
                        <ButtonEdit />
                      </a>
                    </Link>

                    <ButtonDelete
                      onClick={(e) => {
                        handleDelete(e, contact.id)
                      }}
                    />
                  </ButtonGroup>
                </li>
              ))}

              {!data.contact.length && (
                <div className='not-found'>
                  <p>Contact not found</p>
                </div>
              )}
            </>
          )}
          {error && <div className='loader-container'>Error...</div>}
        </ul>
      </ContactListSection>
    </Layout>
  )
}

export default Home
