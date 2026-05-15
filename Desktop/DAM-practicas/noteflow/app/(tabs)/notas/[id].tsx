import { useLocalSearchParams } from 'expo-router';

import { ScreenPlaceholder } from '../../../components/ui/ScreenPlaceholder';

export default function NotaDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <ScreenPlaceholder title="Nota" subtitle={id ? `ID: ${id}` : 'Detalle en construcción'} />
  );
}
