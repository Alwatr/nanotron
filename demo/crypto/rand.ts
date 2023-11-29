import {AlwatrHashGenerator, secretGeneratorPreConfig} from '@alwatr/crypto';

const hashGenerator = new AlwatrHashGenerator(secretGeneratorPreConfig);

for (let i = 0; i <= 10; i++) {
  const hash = hashGenerator.generateRandomSelfValidate();
  const validate = hashGenerator.verifySelfValidate(hash);
  console.log('hash: %s, validate: %s', hash, validate);
}
