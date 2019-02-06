interface Task {
  type: string
  status: {
    type: string
    reason?: string
  }
  created: string
  name: string
  description?: string
}

interface NewVolunteerTask extends Task {
  type: 'new-volunteer'
  profile: {
    uuid: string
    name?: string
  }
}

interface PickUpTask extends Task {
  type: 'pick-up'
  location: {
    streetAddress: string
    city: string
    zip: string
  }
}

const tasks: Task[] = [
  {
    type: 'new-volunteer',
    status: {
      type: 'new',
      // reason: 'None yet',
    },
    created: '2019-02-03',
    name: 'New Volunteer (name?)',
    profile: {
      uuid: 'a26c64fc-2657-477b-a096-19342df4960e',
      // name: 'No name yet',
    },
  },
  {
    type: 'new-volunteer',
    status: {
      type: 'on-hold',
      reason: 'Waiting for response.',
    },
    created: '2019-01-24',
    name: 'New Volunteer (Pamela)',
    profile: {
      uuid: '2e55424b-e0e2-40a5-a850-81b562214f29',
      name: 'Pamela',
    },
  },
  {
    type: 'new-volunteer',
    status: {
      type: 'active',
      reason: 'Needs cookhouse contact,',
    },
    created: '2019-01-12',
    name: 'New Volunteer: Nonnie',
    profile: {
      uuid: '7f9c0610-eb2b-465e-8c5f-4dd3b84e56fd',
      name: 'Nonnie',
    },
  },
]

export default tasks
