import { useLocalSearchParams } from 'expo-router';

import { ScreenPlaceholder } from '../../../components/ui/ScreenPlaceholder';

export default function IdeaDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <ScreenPlaceholder title="Idea" subtitle={id ? `ID: ${id}` : 'Detalle en construcción'} />
  );
}
