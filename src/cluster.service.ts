const cluster = require('cluster');
import * as os from 'os';
import { Injectable } from '@nestjs/common';

const numCPUs = os.cpus().length;

@Injectable()
export class ClusterService  {
    static clusterizeApp(callback: Function): void {
        if(cluster.isMaster){
            for (let i = 0; i < numCPUs; i++) {
                cluster.fork();
            }
            cluster.on('exit', (worker, code, signal) => {
                cluster.fork();
            })
        } else {
            callback();
        }
    }
}