import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

class PGRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: users } = data.postgres.allImpactUsers

    return (
      <div className="columns is-multiline">
        {users && users.map(({ node: user }) => (
            <div className="is-parent column is-6" key={user.id}>
              <article className='blog-list-item tile is-child box notification'>
                <header><p className="post-meta">{user.email}</p></header>
                <p>Whatever</p>
              </article>
            </div>
        ))}
      </div>
    )
  }
}

PGRoll.propTypes = {
  data: PropTypes.shape({
    postgres: PropTypes.shape({
        allImpactUsers: PropTypes.shape({
            edges: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                email: PropTypes.string,
            })),
        }),
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
        query ImpactUsersQuery {
            postgres {
                allImpactUsers {
                    edges {
                        node {
                          id
                          email
                        }
                    }
                }
            }
        }
    `}as
    render={(data, count) => <PGRoll data={data} count={count} />}
  />
)
