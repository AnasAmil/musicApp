"use client"
import React, { useState } from 'react'
import { Menu, UnstyledButton, Group, Avatar, Text } from '@mantine/core'
import { IconChevronDown, IconUserCircle, IconLogout, IconSettings } from '@tabler/icons-react';


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
                    <Avatar radius="xl" size={30} />
                    <Text weight={500} size="sm"  mr={3}>
                        Anas
                    </Text>
                    <IconChevronDown size={12} stroke={1.5} color='#C4ACB9'/>
                </Group>
            </UnstyledButton>
        </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item icon={<IconUserCircle stroke={1.5} size={16} />} >
                Profile
              </Menu.Item>

              <Menu.Item icon={<IconSettings stroke={1.5} size={16} />} >
                Settings
              </Menu.Item>

              <Menu.Divider />

              <Menu.Item icon={<IconLogout stroke={1.4} size={16}  />} color='red'>
                Logout
              </Menu.Item>
            </Menu.Dropdown>
      </Menu>
  )
}

export default ProfilePic