"use client"
import React, { useState } from 'react'
import { Menu, UnstyledButton, Group, Avatar, Text } from '@mantine/core'
import { IconChevronDown, IconUserCircle } from '@tabler/icons-react';


const ProfilePic = () => {
    const [userMenuOpened, setUserMenuOpened] = useState(false);
  return (
    <Menu
        width={260}
        position="bottom-end"
        transition="pop-top-right"
        onClose={() => setUserMenuOpened(false)}
        onOpen={() => setUserMenuOpened(true)}
    >
        <Menu.Target>
            <UnstyledButton
                
            >
                <Group spacing={7}>
                    <Avatar src={'https://www.pexels.com/photo/woman-in-black-brassiere-and-white-shorts-4519122/'} radius="xl" size={36} />
                    <Text weight={500} size="sm"  mr={3}>
                        Anas
                    </Text>
                    <IconChevronDown size={12} stroke={1.5} color='#C4ACB9'/>
                </Group>
            </UnstyledButton>
        </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item icon={<IconUserCircle stroke={1.5} size={16} />} >
                Liked posts
              </Menu.Item>
              <Menu.Item >
                Saved posts
              </Menu.Item>
              <Menu.Item>
                Your comments
              </Menu.Item>

              <Menu.Label>Settings</Menu.Label>
              <Menu.Item >Account settings</Menu.Item>
              <Menu.Item >
                Change account
              </Menu.Item>
              <Menu.Item>Logout</Menu.Item>

              <Menu.Divider />

              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item>
                Pause subscription
              </Menu.Item>
              <Menu.Item color="red">
                Delete account
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
  )
}

export default ProfilePic