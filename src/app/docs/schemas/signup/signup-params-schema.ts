export const signupParamsSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    password: {
      type: 'string'
    },

    role: {
      type: 'string'
    }
  },
  required: ['name', 'email', 'password', 'role']
}

// request