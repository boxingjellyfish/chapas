import Trace from 'lance/lib/Trace';
import ChapasClientEngine from './ChapasClientEngine';
import ChapasGameEngine from '../common/ChapasGameEngine';
import '../../assets/sass/main.scss';

// sent to both game engine and client engine
const options = {
    traceLevel: Trace.TRACE_NONE,
    delayInputCount: 8,
    scheduler: 'render-schedule',
    syncOptions: {
        sync: 'extrapolate',
        localObjBending: 0.2,
        remoteObjBending: 0.5
    }
};

// create a client engine and a game engine
const gameEngine = new ChapasGameEngine(options);
const clientEngine = new ChapasClientEngine(gameEngine, options);

clientEngine.start();
