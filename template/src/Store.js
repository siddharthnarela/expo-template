import { proxy } from 'valtio'

const store = proxy({
    userName: 'John Doe',
    userAge: 25,
    userLocation: 'New York',
    userOccupation: 'Software Developer',
    userInterests: ['Reading', 'Swimming', 'Coding'],
    userSkills: ['JavaScript', 'React', 'Node.js'],
    userGoals: ['Learn Python', 'Get a promotion', 'Travel the world']
})

export default store;