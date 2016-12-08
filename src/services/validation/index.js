import isEmail from 'validator/lib/isEmail'
import isInt from 'validator/lib/isInt'
import isIn from 'validator/lib/isIn'
import isURL from 'validator/lib/isURL'

const isEmpty = (value) => value === undefined || value === null || value === ''
const join = (rules) => (value, data) =>
  rules.map((rule) => rule(value, data)).filter((error) => !!error)[0]

export const email = (value) => !isEmpty(value) && !isEmail(value) &&
  'E-mail inválido'

export const url = (value) => !isEmpty(value) && !isURL(value) &&
  'URL inválida'

export const required = (value) => isEmpty(value) &&
  'Campo obrigatório'

export const minLength = (min) => (value) => !isEmpty(value) && value.length < min &&
  `Deve conter ao menos ${min} caracteres`

export const maxLength = (max) => (value) => !isEmpty(value) && value.length > max &&
  `Não deve conter mais de ${max} caracteres`

export const integer = (value) => !isInt(value) &&
  'Deve ser um número inteiro'

export const oneOf = (values) => (value) => !isIn(value, values) &&
  `Deve ser um dos seguintes valores: ${values.join(', ')}`

export const match = (field) => (value, data) => data && value !== data[field] &&
  'Deve combinar'

export const createValidator = (rules) => (data = {}) => {
  const errors = {}
  Object.keys(rules).forEach((key) => {
    const rule = join([].concat(rules[key]))
    const error = rule(data[key], data)
    if (error) {
      errors[key] = error
    }
  })
  return errors
}
