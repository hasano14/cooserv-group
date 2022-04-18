import React from 'react'

const ourteam = () => {
  const teamMembers = [
    {
      name: 'Name 1',
      position: 'Position 1',
      image: 'https://via.placeholder.com/150',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc eget aliquet aliquet, nisi nunc ultricies nisi, euismod aliquam nunc nunc euismod.'
    },
    {
      name: 'Name 2',
      position: 'Position 2',
      image: 'https://via.placeholder.com/150',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc eget aliquet aliquet, nisi nunc ultricies nisi, euismod aliquam nunc nunc euismod.'
    },
    {
      name: 'Name 3',
      position: 'Position 3',
      image: 'https://via.placeholder.com/150',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc eget aliquet aliquet, nisi nunc ultricies nisi, euismod aliquam nunc nunc euismod.'
    },
    {
      name: 'Name 4',
      position: 'Position 4',
      image: 'https://via.placeholder.com/150',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc eget aliquet aliquet, nisi nunc ultricies nisi, euismod aliquam nunc nunc euismod.'
    }
  ]

  return (
    <div class="container mx-auto w-5/6 mt-10">
      <div class="flex flex-col text-center w-full mb-10">
        <h1 class="text-4xl text-text1Light dark:text-text1Dark pt-2 md:pt-6">Our Team</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-text2Dark">Some random thing about teams</p>
      </div>
      <div class="flex flex-wrap -m-4">
          { 
            teamMembers.map(members => 
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-center text-center sm:text-left my-2">
                <img alt="team" class="flex-shrink-0 rounded-md   w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={members.image} />
                <div class="flex-grow sm:pl-8">
                   <h2 class="title-font font-medium text-lg text-gray-900 dark:text-text2Dark">{members.name}</h2>
                   <h3 class="text-gray-500 mb-3 dark:text-text1Dark">{members.position}</h3>
                   <p class="mb-4 dark:text-text2Dark">{members.description}</p>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default ourteam