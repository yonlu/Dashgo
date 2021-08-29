import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Sallada</Text>
          <Text color="gray.300" fontSize="small">
            sallada.lucas@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Lucas Sallada"
        src="https://github.com/yonlu.png"
      />
    </Flex>
  );
}
