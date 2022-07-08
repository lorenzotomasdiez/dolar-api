import {Router} from 'express';
import { getPrices } from '../controller';
const router = Router();

router.get('/', getPrices)


export default router; 