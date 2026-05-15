import { useLocalSearchParams } from 'expo-router';

import { ScreenPlaceholder } from '../../../components/ui/ScreenPlaceholder';

export default function ChecklistDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <ScreenPlaceholder
      title="Checklist"
      subtitle={id ? `ID: ${id}` : 'Detalle en construcción'}
    />
  );
}
