import init from './init';
import state from './state';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import downloadDialogPlugin from 'mirador-downloaddialog/es';

const plugins = {
    miradorImageToolsPlugin,
    downloadDialogPlugin,
}

export default {
  ...init,
  ...state,
  plugins
};
