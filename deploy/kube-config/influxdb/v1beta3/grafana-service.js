{
  "apiVersion": "v1beta3",
  "kind": "Service",
  "metadata": {
    "labels": {
      "name": "monitoring-grafana",
      "kubernetes.io/cluster-service": "true"
    },
    "name": "monitoring-grafana"
  },
  "spec": {
    "ports": [
      {
        "port": 80,
        "targetPort": 8080
      }
    ],
    "selector": {
      "name": "influxGrafana"
    }
  }
}