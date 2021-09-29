const UserDto = ({_id, name, email, role, createdAt}) => ({
    id: _id,
    name,
    email,
    role,
    createdAt
})


module.exports = {UserDto}