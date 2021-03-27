'use strict';
const fs = require('fs');

let isInKubernetes;

function hasKubeEnv() {
	return process.env.KUBERNETES_SERVICE_HOST !== undefined;
}

function hasServiceAccountFile() {
	return fs.existsSync('/run/secrets/kubernetes.io/serviceaccount/token')
    && fs.existsSync('/run/secrets/kubernetes.io/serviceaccount/namespace');
}

function hasClusterDns() {
    return fs.readFileSync('/etc/resolv.conf', 'utf8').includes('cluster.local');
}

module.exports = () => {
	if (isInKubernetes === undefined) {
		isInKubernetes = hasKubeEnv() || hasServiceAccountFile() || hasClusterDns();
	}

	return isInKubernetes;
};