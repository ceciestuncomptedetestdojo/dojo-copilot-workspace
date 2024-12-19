import { DefaultFocus } from '../../../../lib/src/spatial-navigation/context/DefaultFocusContext';
import { Button } from '../../design-system/components/Button';
import { Spacer } from '../../design-system/components/Spacer';
import { Modal } from './Modal';

interface QualityModalProps {
  isModalVisible: boolean;
  setIsModalVisible: (isVisible: boolean) => void;
  setQuality: (quality: string) => void;
}

export const QualityModal = ({
  isModalVisible,
  setIsModalVisible,
  setQuality,
}: QualityModalProps) => {
  return (
    <Modal
      isModalVisible={isModalVisible}
      hideModal={() => setIsModalVisible(false)}
      title={'Choose stream quality'}
    >
      <DefaultFocus>
        <Button
          label="1080p"
          onSelect={() => {
            setQuality('1080p');
            setIsModalVisible(false);
          }}
        />
      </DefaultFocus>
      <Spacer gap="$8" />
      <Button
        label="720p"
        onSelect={() => {
          setQuality('720p');
          setIsModalVisible(false);
        }}
      />
      <Spacer gap="$8" />
      <Button
        label="480p"
        onSelect={() => {
          setQuality('480p');
          setIsModalVisible(false);
        }}
      />
      <Spacer gap="$8" />
      <Button
        label="360p"
        onSelect={() => {
          setQuality('360p');
          setIsModalVisible(false);
        }}
      />
    </Modal>
  );
};
